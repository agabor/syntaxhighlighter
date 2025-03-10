SyntaxHighlighter.brushes.Nginx = function()
{
	var mainDirectives = 'http server events location include if map';
	
	var directives = 'listen server_name root index try_files deny expires set return add_header client_max_body_size';

	this.regexList = [
		// Comments
		{ regex: new RegExp('#.*$', 'gm'),                          css: 'comments' },
		
		// Strings
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,     css: 'string' },
		
		// Block directives (like http, server, location)
		{ regex: new RegExp(this.getKeywords(mainDirectives), 'gm'), css: 'keyword' },
		
		// Regular directives
		{ regex: new RegExp(this.getKeywords(directives), 'gm'),    css: 'functions' },
		
		// Variables
		{ regex: /\$[a-z0-9_]+/g,                                    css: 'variable' },

		{ regex: /fastcgi_[a-z_]+/g,                                css: 'functions'},
		
		{ regex: /[\{\}]/g,                                         css: 'color1' },
		{ regex: /;/g,                                              css: 'color1' },
		
		{ regex: /~\*?\s[^{"]+/g,                                   css: 'regex' },
		{ regex: /~\*?\s"[^{"]+"/g,                                 css: 'regex' }
	];
};

SyntaxHighlighter.brushes.Nginx.prototype  = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Nginx.aliases    = ['nginx', 'nginxconf'];