

<cfscript>

gateway = createObject("component","gateway").init();
contact = {"id"="40","name"="_Alison Ramsay","phone"="0131 650 6324","email"="alison.ramsay@ed.ac.uk"};

gateway.add(contact);
contact = gateway.get(40);
writeDump(contact);

contact.name = "Updated";
gateway.update(contact);
contact = gateway.get(40);
writeDump(contact);

gateway.delete(contact);
contact = gateway.get(40);
writeDump(contact);

contact = {"id"="","name"="_Alison Ramsay","phone"="0131 650 6324","email"="alison.ramsay@ed.ac.uk"};
gateway.save(contact);
contact = gateway.get(39);
writeDump(contact);

contact.name = "Updated";
gateway.save(contact);
contact = gateway.get(39);
writeDump(contact);

gateway.delete(contact);
contact = gateway.get(39);
writeDump(contact);

</cfscript>