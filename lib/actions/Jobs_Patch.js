/**
 * Auto-generated action file for "SchedulerManagementClient" API.
 *
 * Generated at: 2019-05-07T14:38:48.457Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-scheduler-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Jobs_Patch'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroupName",
    "jobCollectionName",
    "jobName",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroupName": "resourceGroupName",
    "jobCollectionName": "jobCollectionName",
    "jobName": "jobName",
    "api_version": "api-version",
    "id": "id",
    "name": "name",
    "message": "message",
    "queueName": "queueName",
    "sasToken": "sasToken",
    "storageAccount": "storageAccount",
    "queueMessage": "queueMessage",
    "type": "type",
    "authentication": "authentication",
    "body": "body",
    "headers": "headers",
    "method": "method",
    "uri": "uri",
    "request": "request",
    "retryCount": "retryCount",
    "retryInterval": "retryInterval",
    "retryType": "retryType",
    "retryPolicy": "retryPolicy",
    "serviceBusQueueMessage": "serviceBusQueueMessage",
    "topicPath": "topicPath",
    "serviceBusTopicMessage": "serviceBusTopicMessage",
    "errorAction": "errorAction",
    "action": "action",
    "count": "count",
    "endTime": "endTime",
    "frequency": "frequency",
    "interval": "interval",
    "hours": "hours",
    "minutes": "minutes",
    "monthDays": "monthDays",
    "monthlyOccurrences": "monthlyOccurrences",
    "weekDays": "weekDays",
    "schedule": "schedule",
    "recurrence": "recurrence",
    "startTime": "startTime",
    "state": "state",
    "executionCount": "executionCount",
    "failureCount": "failureCount",
    "faultedCount": "faultedCount",
    "lastExecutionTime": "lastExecutionTime",
    "nextExecutionTime": "nextExecutionTime",
    "status": "status",
    "properties": "properties",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'Jobs_Patch',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Scheduler/jobCollections/{jobCollectionName}/jobs/{jobName}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}