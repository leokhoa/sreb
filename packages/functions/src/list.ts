import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";

export const main = handler(async (event) => {
	const params = {
	  //TableName: Table.Notes.tableName,
	  TableName: "prod-notes-Notes",
	  KeyConditionExpression: "userId = :userId",
	  ExpressionAttributeValues: {
	    ":userId": event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
	  },
	};





  const result = await dynamoDb.query(params);
  console.log(result);

  // Return the matching list of items in response body
  return JSON.stringify(result.Items);
});
