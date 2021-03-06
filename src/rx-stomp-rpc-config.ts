import { Observable } from 'rxjs';

import { IMessage } from './i-message';
import { RxStomp } from './rx-stomp';

/**
 * See the guide for example
 */
export type setupReplyQueueFnType = (replyQueueName: string, rxStomp: RxStomp) => Observable<IMessage>;

/**
 * RPC Config. See the guide for example.
 */
export class RxStompRPCConfig {
  /**
   * Name of the reply queue. See the guide for details.
   * Default `/temp-queue/rpc-replies` suitable for RabbitMQ and ActiveMQ.
   */
  public replyQueueName?: string;
  /**
   * Setup the reply queue. See the guide for details.
   */
  public setupReplyQueue?: setupReplyQueueFnType;
}
