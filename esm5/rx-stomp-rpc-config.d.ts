import { Observable } from 'rxjs';
import { IMessage } from './i-message';
import { RxStomp } from './rx-stomp';
/**
 * See the guide for example
 */
export declare type setupReplyQueueFnType = (replyQueueName: string, rxStomp: RxStomp) => Observable<IMessage>;
/**
 * RPC Config. See the guide for example.
 */
export declare class RxStompRPCConfig {
    /**
     * Name of the reply queue. See the guide for details.
     * Default `/temp-queue/rpc-replies` suitable for RabbitMQ and ActiveMQ.
     */
    replyQueueName?: string;
    /**
     * Setup the reply queue. See the guide for details.
     */
    setupReplyQueue?: setupReplyQueueFnType;
}
