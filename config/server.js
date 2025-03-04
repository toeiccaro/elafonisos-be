module.exports = ({ env }) => ({
  host: env(process.env.HOST, "0.0.0.0"),
  port: env.int(process.env.PORT, 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
