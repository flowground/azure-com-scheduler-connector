# ![LOGO](logo.png) SchedulerManagementClient **flow**ground Connector

## Description

A generated **flow**ground connector for the SchedulerManagementClient API (version 2016-03-01).

Generated from: https://api.apis.guru/v2/specs/azure.com/scheduler/2016-03-01/swagger.json<br/>
Generated at: 2019-05-07T17:38:48+03:00

## API Description



## Authorization

This API does not require authorization.

## Actions

### Gets all job collections under specified subscription.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `api-version` - _required_ - The API version.

### Gets all job collections under specified resource group.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `api-version` - _required_ - The API version.

### Deletes a job collection.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `api-version` - _required_ - The API version.

### Gets a job collection.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `api-version` - _required_ - The API version.

### Patches an existing job collection.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `api-version` - _required_ - The API version.

### Provisions a new job collection or updates an existing job collection.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `api-version` - _required_ - The API version.

### Disables all of the jobs in the job collection.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `api-version` - _required_ - The API version.

### Enables all of the jobs in the job collection.

*Tags:* `JobCollections`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `api-version` - _required_ - The API version.

### Lists all jobs under the specified job collection.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - The number of jobs to request, in the of range of [1..100].
* `$skip` - _optional_ - The (0-based) index of the job history list from which to begin requesting entries.
* `$filter` - _optional_ - The filter to apply on the job state.

### Deletes a job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `jobName` - _required_ - The job name.
* `api-version` - _required_ - The API version.

### Gets a job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `jobName` - _required_ - The job name.
* `api-version` - _required_ - The API version.

### Patches an existing job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `jobName` - _required_ - The job name.
* `api-version` - _required_ - The API version.

### Provisions a new job or updates an existing job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `jobName` - _required_ - The job name.
* `api-version` - _required_ - The API version.

### Lists job history.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `jobName` - _required_ - The job name.
* `api-version` - _required_ - The API version.
* `$top` - _optional_ - the number of job history to request, in the of range of [1..100].
* `$skip` - _optional_ - The (0-based) index of the job history list from which to begin requesting entries.
* `$filter` - _optional_ - The filter to apply on the job state.

### Runs a job.

*Tags:* `Jobs`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription id.
* `resourceGroupName` - _required_ - The resource group name.
* `jobCollectionName` - _required_ - The job collection name.
* `jobName` - _required_ - The job name.
* `api-version` - _required_ - The API version.

## License

**flow**ground :- Telekom iPaaS / azure-com-scheduler-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
