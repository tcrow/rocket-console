package com.didapinche.service;

import org.apache.rocketmq.common.protocol.body.ProducerConnection;

/**
 * Created by tangjie
 * 2016/12/1
 * styletang.me@gmail.com
 */
public interface ProducerService {
    ProducerConnection getProducerConnection(String producerGroup, String topic);
}
