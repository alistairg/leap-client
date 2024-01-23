import * as Leap from "@mkellsy/leap";

import Colors from "colors";

import { Device } from "../Device";
import { DeviceInterface } from "../Interfaces/DeviceInterface";
import { DeviceType } from "../Interfaces/DeviceType";
import { Processor } from "./Processor";

export class Switch extends Device implements DeviceInterface {
    constructor(processor: Processor, area: Leap.Area, definition: Leap.Zone) {
        super(DeviceType.Switch, processor, area, definition);

        this.log.debug(`${this.area.Name} ${Colors.green("Switch")} ${this.name}`);
    }

    public override update(status: Leap.ZoneStatus): void {
        const previous = { ...this.status };

        const definition = {
            id: this.id,
            name: this.name,
            area: this.area.Name,
            type: DeviceType[this.type],
        };

        this.state = { state: status.SwitchedLevel || "Unknown" };

        if (this.state.state !== previous.state) {
            this.emit("Update", { ...definition, status: this.status.state === "On", statusType: "Switch" });
        }
    }
}