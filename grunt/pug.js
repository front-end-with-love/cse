module.exports = {
	pug: {
		options: {
			data: {
				debug: false
			},
			pretty: true
		},
		files: {
			'<%=project.dist %>/index.html': '<%=project.app %>/tpls/index.pug',
			'<%=project.dist %>/configuring.html': '<%=project.app %>/tpls/configuring.pug'
		}
	}
};
