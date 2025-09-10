Si quieres que todas las ramas de tu profe se sincronicen a tu fork con un solo comando, puedes hacer:

git fetch upstream
git push origin 'refs/remotes/upstream/*:refs/heads/*'

Eso lo que hace es:

Traer todas las ramas del profe (upstream/*)

Subirlas a tu fork (origin/*)