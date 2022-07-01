import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@server': __dirname,
  '@database': __dirname + '/database',
  '@gateway': __dirname + '/gateway',
  '@user': __dirname + '/gateway/user',
  '@employee': __dirname + '/gateway/employee',
  '@contact': __dirname + '/gateway/contact',
  '@organization': __dirname + '/gateway/organization',
  '@middleware': __dirname + '/services/middleware',
  '@rest-api': __dirname + '/services/rest-api',
  '@email': __dirname + '/services/email',
  '@public': __dirname + '/public',
});
