import mySQL from 'mysql'

const con = mySQL.createConnection({
  host: 'database-1.cvssw6oawjkp.us-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Mahomes22',
  port: 3306,
  database: 'myLambda',
})

export const handler = event => {
  con.query(
    'CREATE TABLE LambdaTable1 (name VARCHAR(255))',
    function (error, result) {
      // ' SHOW TABLES',
      // function (error, result) {
      if (error) {
        con.destroy()
        return error
      } else {
        console.log(result)
        con.end()
        return result
      }
    }
  )

  const response = {
    statusCode: 200,
    body: 'DB good to go!',
  }

  return response
}
