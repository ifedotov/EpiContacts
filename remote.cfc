<cfcomponent>

	<!---  --->
	<cfset variables.gateway = createObject("component", "gateway").init() />


	<cffunction name="add" access="remote">
		<cfargument name="contactID" type="numeric" required="true" />
		
	</cffunction>
	

	<cffunction name="delete" access="remote">
		<cfargument name="contactID" type="numeric" required="true" />
		
	</cffunction>
	

	<cffunction name="get" access="remote">
		<cfargument name="contactID" type="numeric" required="true" />
		
	</cffunction>
	

	<cffunction name="list" access="remote">
		
		
	</cffunction>
	

	<cffunction name="save" access="remote">
		<cfargument name="contactID" type="numeric" required="true" />

	</cffunction>




</cfcomponent>