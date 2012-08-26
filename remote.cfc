<cfcomponent>

	<cfset variables.gateway = createObject("component", "gateway").init() />


	<cffunction name="delete" access="remote">
		<cfargument name="contactID" type="numeric" required="true" />
		<cfset variables.gateway.delete(arguments.contactID) />		
	</cffunction>
	

	<cffunction name="get" access="remote">
		<cfargument name="contactID" type="numeric" required="true" />
		<cfreturn variables.gateway.get(arguments.contactID) />		
	</cffunction>
	

	<cffunction name="list" access="remote">
		<cfreturn variables.gateway.list() />				
	</cffunction>
	

	<cffunction name="save" access="remote" >
		<cfargument name="contact" type="any" />
		
		<cfset variables.gateway.save(deserializeJSON(arguments.contact)) />
	</cffunction>


</cfcomponent>