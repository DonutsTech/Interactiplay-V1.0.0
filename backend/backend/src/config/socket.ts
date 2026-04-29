import { Server as HttpServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import type { CampaignUpdateClient } from '../@types/interface/campaign';
import type { ClientPublic } from '../@types/interface/socket';
import { campaignService } from '../services/campaign';
import { modelPlayService } from '../services/modelPlay';
import { modelTimeService } from '../services/modelTime';
import { transformCampaignForClient } from '../utils/format/campaign';

export class SocketConfig {
  private io: SocketIOServer;

  constructor(httpServer: HttpServer) {
    this.io = new SocketIOServer(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
      transports: ['websocket'],
    });

    this.setupEventHandlers();
  }

  private setupEventHandlers(): void {
    const publicNamespace = this.io.of('/public');

    publicNamespace.on('connection', socket => {
      console.log('Usuário conectado:', socket.id);

      socket.on('init', async (data: ClientPublic) => {
        let modelPlay;
        if (!data.ID_MODEL_PLAY) {
          modelPlay = await modelPlayService.createModelPlaySocketPlay(data);
        } else {
          modelPlay = await modelPlayService.getModelPlayById(data);
        }

        console.log('ModelPlay inicializado para o usuário:', modelPlay);
        socket.emit('initSuccess', modelPlay);
      });

      socket.on('play_block', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          await modelPlayService.incrementPlayModelPlayBlock(data);
          // Atualiza analytics
          if (data.ID_CAMPAIGN) {
            const analytics = await campaignService.campaignAnalyticsForUser(data.ID_CAMPAIGN);
            socket.emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('play', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          await modelPlayService.incrementPlayModelPlay(data);
          // Atualiza analytics
          if (data.ID_CAMPAIGN) {
            const analytics = await campaignService.campaignAnalyticsForUser(data.ID_CAMPAIGN);
            socket.emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('view', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          await modelPlayService.incrementViewModelPlay(data);
          // Atualiza analytics
          if (data.ID_CAMPAIGN) {
            const analytics = await campaignService.campaignAnalyticsForUser(data.ID_CAMPAIGN);
            socket.emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('timescreen', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          const result = await modelTimeService.incrementTimeVideo(data);
          socket.emit('timescreenSuccess', result);
          // Atualiza analytics
          if (data.ID_CAMPAIGN) {
            const analytics = await campaignService.campaignAnalyticsForUser(data.ID_CAMPAIGN);
            socket.emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('campaignUpdate', async (updateData: CampaignUpdateClient) => {
        await campaignService.updateCampaignClientForId(updateData);
        const result = transformCampaignForClient(updateData);
        socket.emit('campaignUpdate', result);
        // Atualiza analytics
        if ((updateData as any).ID_CAMPAIGN) {
          const analytics = await campaignService.campaignAnalyticsForUser((updateData as any).ID_CAMPAIGN);
          socket.emit('campaignAnalyticsData', analytics);
        }
      });

      socket.on('campaignAnalytics', async (campaignId: string) => {
        const analytics = await campaignService.campaignAnalyticsForUser(campaignId);
        socket.emit('campaignAnalyticsData', analytics);
      });

      socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
      });
    });

    const privateNamespace = this.io.of('/private');

    privateNamespace.on('connection', socket => {
      console.log('Usuário conectado na namespace privada:', socket.id);

      socket.on('disconnect', () => {
        console.log('Usuário desconectado da namespace privada:', socket.id);
      });
    });

    /*
    this.io.on('connection', socket => {
      console.log('Usuário conectado:', socket.id);

      socket.on('joinCampaign', (campaignId: string) => {
        socket.join(`campaign_${campaignId}`);
        console.log(`Usuário ${socket.id} entrou na campanha ${campaignId}`);
      });

      socket.on('leaveCampaign', (campaignId: string) => {
        socket.leave(`campaign_${campaignId}`);
        console.log(`Usuário ${socket.id} saiu da campanha ${campaignId}`);
      });

      socket.on('campaignAnalytics', (campaignId: string) => {
        const analytics = campaignService.campaignAnalyticsForUser(campaignId);

        socket.emit('campaignAnalyticsData', analytics);
      });

      socket.on('campaignUpdate', async (campaignId: string, updateData: CampaignUpdateClient) => {
        const result = await campaignService.updateCampaignClientForId(updateData);

        socket.emit('campaignClientSuccess', result);

        const analytics = await campaignService.campaignAnalyticsForUser(campaignId);

        socket.to(`campaign_${campaignId}`).emit('campaignAnalytics', analytics);
      });

      socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
      });
    });
    */
  }
}
