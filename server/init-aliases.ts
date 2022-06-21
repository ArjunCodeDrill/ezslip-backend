import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@server': __dirname,
  '@database': __dirname + '/database',
  '@gateway': __dirname + '/gateway',
  '@user': __dirname + '/gateway/user',
  '@employee': __dirname + '/gateway/employee',
  '@contact': __dirname + '/gateway/contact',
  '@rest-api': __dirname + '/services/rest-api',
  '@middleware': __dirname + '/services/middleware',
  '@email': __dirname + '/services/email',
  '@public': __dirname + '/public',
});
