export function formatNummberForDate(dateNumber) {
    return new Date(dateNumber * 1000);
}
export function formatDateBR() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
//# sourceMappingURL=data.js.map