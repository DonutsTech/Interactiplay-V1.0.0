import { Server as HttpServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import type { ClientPublic } from '../@types/interface/socket';
import { analyticsService } from '../services/analytics';
import { bondService } from '../services/bond';
import { campaignVideoService } from '../services/campaignVideo';
import { externalLinkService } from '../services/externalLink';
import { modelPlayService } from '../services/modelPlay';
import { modelTimeService } from '../services/modelTime';
import { modelViewsService } from '../services/modelViews';

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
      socket.on('init', async (data: ClientPublic) => {
        let modelView;
        if (data.ID_MODEL_VIEW === '' || data.ID_MODEL_VIEW === undefined) {
          modelView = await modelViewsService.createModelViewSocketView(data);
        } else {
          modelView = await modelViewsService.getModelViewByIdSocket(data);
        }

        socket.emit('initSuccess', modelView);
      });

      socket.on('play_block', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          await modelPlayService.incrementPlayModelPlayBlock(data);
          if (data.ID_CAMPAIGN) {
            const analytics = await analyticsService.getAnalyticsForCampaign(data.ID_CAMPAIGN);
            socket.to(`campaign_${data.ID_CAMPAIGN}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('play', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          await modelPlayService.incrementPlayModelPlay(data);
          if (data.ID_CAMPAIGN) {
            const analytics = await analyticsService.getAnalyticsForCampaign(data.ID_CAMPAIGN);
            socket.to(`campaign_${data.ID_CAMPAIGN}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('view', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          await modelPlayService.incrementViewModelPlay(data);
          if (data.ID_CAMPAIGN) {
            const analytics = await analyticsService.getAnalyticsForCampaign(data.ID_CAMPAIGN);
            socket.to(`campaign_${data.ID_CAMPAIGN}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('cta_click_video', async (id: string) => {
        if (id) {
          const result = await campaignVideoService.updateCampaignVideoForCTAClick(id, false);
          if (result && result.CAMPAIGN_ID) {
            const analytics = await analyticsService.getAnalyticsForCampaign(result.CAMPAIGN_ID);
            socket.to(`campaign_${result.CAMPAIGN_ID}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('cta_click_test_ab', async (id: string) => {
        if (id) {
          const result = await campaignVideoService.updateCampaignVideoForCTAClick(id, true);
          if (result && result.CAMPAIGN_ID) {
            const analytics = await analyticsService.getAnalyticsForCampaign(result.CAMPAIGN_ID);
            socket.to(`campaign_${result.CAMPAIGN_ID}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('bond_click_video', async (id: string, id_campaign: string) => {
        if (id) {
          await bondService.updateBondForBondClick(id, false);

          if (id_campaign) {
            const analytics = await analyticsService.getAnalyticsForCampaign(id_campaign);
            socket.to(`campaign_${id_campaign}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('bond_click_test_ab', async (id: string, id_campaign: string) => {
        if (id) {
          await bondService.updateBondForBondClick(id, true);

          if (id_campaign) {
            const analytics = await analyticsService.getAnalyticsForCampaign(id_campaign);
            socket.to(`campaign_${id_campaign}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('external_link_click', async (id: string, id_campaign: string) => {
        if (id) {
          await externalLinkService.updateExternalLinkForClick(id, false);

          if (id_campaign) {
            const analytics = await analyticsService.getAnalyticsForCampaign(id_campaign);
            socket.to(`campaign_${id_campaign}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('external_link_click_test_ab', async (id: string, id_campaign: string) => {
        if (id) {
          await externalLinkService.updateExternalLinkForClick(id, true);

          if (id_campaign) {
            const analytics = await analyticsService.getAnalyticsForCampaign(id_campaign);
            socket.to(`campaign_${id_campaign}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('continuity_click_video', async (id: string, id_campaign: string) => {
        if (id) {
          await bondService.updateBondForContinutyClick(id, false);

          if (id_campaign) {
            const analytics = await analyticsService.getAnalyticsForCampaign(id_campaign);
            socket.to(`campaign_${id_campaign}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('continuity_click_test_ab', async (id: string, id_campaign: string) => {
        if (id) {
          await bondService.updateBondForContinutyClick(id, true);

          if (id_campaign) {
            const analytics = await analyticsService.getAnalyticsForCampaign(id_campaign);
            socket.to(`campaign_${id_campaign}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('timescreen', async (data: ClientPublic) => {
        if (data.ID_MODEL_PLAY !== '' && data.ID_MODEL_PLAY !== undefined) {
          const result = await modelTimeService.incrementTimeVideo(data, data.TIMESCREEN);
          socket.emit('timescreenSuccess', result);
          if (data.ID_CAMPAIGN) {
            const analytics = await analyticsService.getAnalyticsForCampaign(data.ID_CAMPAIGN);
            socket.to(`campaign_${result.ID_CAMPAIGN}`).emit('campaignAnalyticsData', analytics);
          }
        }
      });

      socket.on('campaignAnalytics', async (campaignId: string) => {
        socket.join(`campaign_${campaignId}`);
        const analytics = await analyticsService.getAnalyticsForCampaign(campaignId);
        socket.emit('campaignAnalyticsData', analytics);
      });

      socket.on('testABAnalytics', async (testABId: string) => {
        const analytics = await analyticsService.getAnalyticsForTestAB(testABId);
        socket.emit('testABAnalyticsData', analytics);
      });

      socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
      });
    });
  }
}
