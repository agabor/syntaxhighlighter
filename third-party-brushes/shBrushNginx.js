SyntaxHighlighter.brushes.Nginx = function()
{
	var mainDirectives = /(^|\s)(http|server|events|location|include|if|map)\s/g;
	
	var directives = /\s(listen|server_name|root|index|try_files|deny|expires|set|return|add_header|client_max_body_size)\s/g;

	this.regexList = [
		// Comments
		{ regex: new RegExp('#.*$', 'gm'),                           css: 'comments' },
		
		// Strings
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,      css: 'string' },
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,      css: 'string' },
		
		// Block directives (like http, server, location)
		{ regex: mainDirectives,                                     css: 'keyword' },
		
		// Regular directives
		{ regex: directives,                                         css: 'functions' },
		
		// Variables
		{ regex: /\$[a-z0-9_]+/g,                                    css: 'variable' },
		{ regex: /[0-9]+[GMKksm]?/g,                                 css: 'value' },
		{ regex: /\s(POST|GET)\s/g,                                  css: 'value' },

		{ regex: /fastcgi_[a-z_]+/g,                                 css: 'functions'},
		
		{ regex: /[\{\}\(\)\[\]]/g,                                  css: 'color1' },
		{ regex: /;/g,                                               css: 'color1' },
		
		{ regex: /~\*?\s(\([^{"()]+\)|[^{"()]+)+/g,                  css: 'regex' },
		{ regex: /~\*?\s"(\([^{"()]+\)|[^{"()]+)+"/g,                css: 'regex' }
	];
};

SyntaxHighlighter.brushes.Nginx.prototype  = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Nginx.aliases    = ['nginx', 'nginxconf'];