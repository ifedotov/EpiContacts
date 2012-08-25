<cfcomponent>

	<cffunction name="init" access="public">
		<cfset var jsonData = loadDataFromStorage() />
		<cfset var queryData = convertJsonToQuery(jsonData) />
		<cfset variables.contacts = queryData />
		<cfreturn this />
	</cffunction>


	<cffunction name="convertJsonToQuery" access="public">
		<cfargument name="jsonData" type="string" required="true" />

		<cfscript>
			var json = deserializeJSON(arguments.jsonData) ;
			var q = queryNew("id,name,phone,email");
			var i = 0;
			var j = 0;
			var cols = listToArray(q.columnList);
			var col = "";
			var len = arrayLen(cols);

			for (i=1; i lte arrayLen(json); i=i+1) {
				queryAddRow(q, 1);
				for (j = 1; j lte len; j = j + 1)  {
					col = cols[j];
					querySetCell(q, col, json[i][col], i);
				}
			}
			return q;
		</cfscript>
	</cffunction>


	<cffunction name=""


	<cffunction name="loadDataFromStorage" access="public">
		<cfset var contactsJson = '' />		
		<cffile action="read" file="#getDirectoryFromPath(getCurrentTemplatePath())#/contacts.json" variable="contactsJson" />
		<cfset variables.contactsJson = contactsJson />
		<cfreturn contactsJson />
	</cffunction>


	<cffunction name="getJson">
		<cfreturn variables.contactsJson />
	</cffunction>

	<cffunction name="getQ">
		<cfreturn variables.contacts />
	</cffunction>



</cfcomponent>
