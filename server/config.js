const DB_URI = (process.env.NODE_ENV === "test")
    ? "postgresql:///movieusersdb_test"
    : "postgresql:///movieusersdb";

const SECRET_KEY = process.env.SECRET_KEY || "ghjkgC%78scC$+v0toVv?49c2";

const BCRYPY_WORK_FACTOR = 12;

module.exports = {
    DB_URI,
    SECRET_KEY,
    BCRYPY_WORK_FACTOR
};
