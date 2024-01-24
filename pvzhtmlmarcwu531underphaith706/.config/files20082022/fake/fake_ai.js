//generate code here
function loadAi() {
  var code;
  try {
    var link = "https://github.com/marcwu531/pvzHtmlCode"
    var GithubUser = process.env.EMAIL
    var GithubPassword = s //process.env.PASSWORD
    var aiFunc =
      function callAi() {
        getCode(link, GithubUser, GithubPassword)
        AiGenerateCode()
        code = DecryptCode()
        AiCheckCode()
        AiTryCatchCode()
        AiRunCode()
        callAi()
        ReplaceHtmlCode(this.codes)
      }
  } catch (e) {
    report(link, GithubUser, code)
  }
}