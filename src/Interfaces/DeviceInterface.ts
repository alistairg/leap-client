import * as Logger from "js-logger";

import { AreaDefinition, AreaStatus, Href, ZoneStatus } from "@mkellsy/leap";

import { DeviceState } from "./DeviceState";
import { DeviceType } from "./DeviceType";

export interface DeviceInterface {
    id: string;
    name: string;
    log: Logger.ILogger;
    address: Href;
    type: DeviceType;
    area: AreaDefinition;
    status: DeviceState;

    update(status: ZoneStatus | AreaStatus): void;
}
