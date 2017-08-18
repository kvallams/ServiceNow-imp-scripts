// background script to correct the CI relationships.
// query BS - child.sys_class_name=cmdb_ci_service^parent.sys_class_name!=cmdb_ci_service^type!=607ad1b2c0a8010e01941856b365af90
// query Appl - child.sys_class_name=cmdb_ci_appl^parent.sys_class_name=cmdb_ci_db_mssql_instance^type!=607ad1b2c0a8010e01941856b365af90
//child.sys_class_name=cmdb_ci_appl^parent.sys_class_name!=cmdb_ci_appl^type!=607ad1b2c0a8010e01941856b365af90^ORparent.sys_class_name!=cmdb_ci_service
//child.sys_class_name=cmdb_ci_appl^parent.sys_class_name=cmdb_ci_db_ora_instance^type!=607ad1b2c0a8010e01941856b365af90
(function(){
	var gr = new GlideRecord('cmdb_rel_ci');
	gr.addEncodedQuery('child.sys_class_name=cmdb_ci_service^parent.sys_class_name!=cmdb_ci_service^type!=607ad1b2c0a8010e01941856b365af90');
	gr.query();
	if(gr.next()){
		var current_child = gr.child;
		var current_parent = gr.parent;
		gr.child = null;
		gr.parent =null;
		gr.child = current_parent;
		gr.parent = current_child;
		gr.type = 'cb5592603751200032ff8c00dfbe5d17';
		gr.autoSysFields(false);
		gr.update();
	}
}();
//=========new code==========

(function(){
	var gr = new GlideRecord('cmdb_rel_ci');
	gr.addEncodedQuery('child.sys_class_name=cmdb_ci_appl^parent.sys_class_name=cmdb_ci_db_ora_instance^type!=607ad1b2c0a8010e01941856b365af90');
	gr.query();
	while(gr.next()){
		var current_child = gr.child.toString();
		var current_parent = gr.parent.toString();
		gr.child = current_parent;
		gr.parent = current_child;
gs.log('child:'+gr.child);
gs.log('parent:'+gr.parent);
gs.log('current_child:'+current_child);
gs.log('current_parent:'+current_parent);
		gr.type = 'cb5592603751200032ff8c00dfbe5d17';
gr.update();
	}
})();

.sysparm_id

