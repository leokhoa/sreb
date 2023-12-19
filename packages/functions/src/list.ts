import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";

export const main = handler(async (event) => {
	const params = {
	  //TableName: Table.Notes.tableName,
	  TableName: "prod-notes-Notes",
	  KeyConditionExpression: "userId = :userId",
	  ExpressionAttributeValues: {
	    ":userId": "123",
	  },
	};





  const result = await dynamoDb.query(params);
  console.log(result);

  // Return the matching list of items in response body
  return JSON.stringify(result.Items);
});
