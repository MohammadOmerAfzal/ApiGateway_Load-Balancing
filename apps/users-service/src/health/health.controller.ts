import { Controller, Get } from '@nestjs/common';
import os from 'os';

@Controller()
export class HealthController {
  @Get('health')
  health() {
    return {
      status: 'ok',
      service: 'users-service',
      hostname: os.hostname(),
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }

  @Get('ready')
  ready() {
    return {
      status: 'ready',
      service: 'users-service',
      hostname: os.hostname(),
    };
  }
}
