import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@server': __dirname,
  '@database': __dirname + '/database',
  '@gateway': __dirname + '/gateway',
  '@operations': __dirname + '/operations',
  '@user': __dirname + '/gateway/user',
  '@employee': __dirname + '/gateway/employee',
  '@contact': __dirname + '/gateway/contact',
  '@organization': __dirname + '/gateway/organization',
  '@middleware': __dirname + '/services/middleware',
  '@email': __dirname + '/services/email',
  '@public': __dirname + '/public',
});
