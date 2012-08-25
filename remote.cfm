

<cfscript>

gateway = createObject("component","gateway").init();

writeDump(gateway.getQ());

</cfscript>