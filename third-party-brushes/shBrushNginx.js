SyntaxHighlighter.brushes.Nginx = function()
{
	// Main nginx directives and blocks extracted from the Notepad++ definition
	var mainDirectives = 'http server events location include';
	
	// Directive keywords extracted from the Notepad++ definition
	var directives = 'listen server_name root index try_files fastcgi_pass deny expires log_not_found';
	
	// Variables extracted from the Notepad++ definition
	var variables = '$ CONTENT_ DOCUMENT_ GATEWAY_ HTTP_ HTTPS';

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
		//{ regex: new RegExp(this.getKeywords(variables), 'gm'),     css: 'variable' },
		
		// Braces, semicolons
		{ regex: /[\{\}]/g,                                         css: 'color1' },
		{ regex: /;/g,                                              css: 'color1' },
		
		// Regular expressions and locations
		{ regex: /~\*?\s[^{]+/g,                                       css: 'regex' }
	];
};

SyntaxHighlighter.brushes.Nginx.prototype  = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Nginx.aliases    = ['nginx', 'nginxconf'];