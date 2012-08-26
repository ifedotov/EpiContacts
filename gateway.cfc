<cfcomponent>

	<cffunction name="init" access="public">
		<cfset var jsonData = loadDataFromStorage() />
		<cfset variables.contacts = deserializeJSON(jsonData) />
		<cfset variables.emptycontact = {"id"="0","name"="","phone"="","email"=""} />
		<cfreturn this />
	</cffunction>


	<cffunction name="add" access="public">
		<cfargument name="contact" type="struct" required="true" />
		<cfset arrayAppend(variables.contacts, arguments.contact) />
	</cffunction>	


	<cffunction name="delete" access="public">
		<cfargument name="contactID" type="numeric" required="true" />
		<cfscript>
			var i = 0;
			for(i=1; i lte arrayLen(variables.contacts); i++) {
				if(variables.contacts[i].id EQ arguments.contactID) {
					arrayDeleteAt(variables.contacts, i);
					break;
				}
			}
			saveDataToStorage(variables.contacts);
		</cfscript>

	</cffunction>


	<cffunction name="get" access="public">
		<cfargument name="contactID" type="numeric" required="true" />
		<cfscript>
			var i = 0;
			for(i=1; i lte arrayLen(variables.contacts); i++) {
				if(variables.contacts[i].id EQ arguments.contactID) {
					return variables.contacts[i];
					
				}
			}
			return variables.emptycontact;
		</cfscript>
	</cffunction>


	<cffunction name="list">
		<cfreturn variables.contacts />
	</cffunction>


	<cffunction name="save" access="public">
		<cfargument name="contact" type="struct" required="true" />
		<cfscript>
			var c = arguments.contact;
			// deserializeJson messes up empty fields so :-(
			// assume email is required
			if(not structKeyExists(c, "id")) c['id'] = 0;
			if(not structKeyExists(c, "phone")) c['phone'] = '';
			if(not structKeyExists(c, "name")) c['name'] = '';

			if(isNumeric(c.id) and c.id gt 0) {
				update(c);
			} else {
				c.id = "#variables.contacts[arrayLen(variables.contacts)].id+1#"; //assuming last contact in the aray has hihgest id
				add(c);
			}
			saveDataToStorage(variables.contacts);
		</cfscript>
	</cffunction>

	
	<cffunction name="update" access="public">
		<cfargument name="contact" type="struct" required="true" />
		<cfscript>
			var i = 0;
			for(i=1; i lte arrayLen(variables.contacts); i++) {
				if(variables.contacts[i].id EQ contact.id) {
					variables.contacts[i] = contact;
					break;
				}
			}
		</cfscript>
	</cffunction>





	<cffunction name="loadDataFromStorage" access="public">
		<cfset var contactsJson = '' />		
		<cffile action="read" file="#getDirectoryFromPath(getCurrentTemplatePath())#/contacts.json" variable="contactsJson" />
		<cfreturn contactsJson />
	</cffunction>


	<cffunction name="saveDataToStorage" access="public">
		<cfargument name="contacts" required="true" />
		<cfset var jsonData = serializeJSON(arguments.contacts) />		

		<cffile action="write" file="#getDirectoryFromPath(getCurrentTemplatePath())#/contacts.json" output="#jsonData#" />
	</cffunction>


</cfcomponent>
