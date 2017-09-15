BOSAuth = function() {
    return {
      init: function(onComplete) {
        fetch(
          new Request("https://slingo.gameiom.com/bos-admin/j_spring_security_check",
            {
              method:'POST',
              redirect: 'manual',
              mode: 'no-cors',
              body: JSON.stringify({j_username:"paul", j_password:"UzYN5WH"})
            })
        ).then(
          function() {
            onComplete()
          }
        )
      }
    }
}
