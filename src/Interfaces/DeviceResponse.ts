export interface DeviceResponse {
    id: string;
    name: string;
    area: string;
    type: "Dimmer" | "Switch" | "Contact" | "Strip" | "Remote" | "Keypad" | "Shade" | "Occupancy" | "Unknown";
    status: string | number | boolean;
    statusType: "Availability" | "Switch" | "Level" | "Contact" | "Button" | "Speed" | "Occupancy";
}
