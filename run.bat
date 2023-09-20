set type=%1

IF "%type%" EQU "install" (
    set command=npm install
) ELSE (
    set command=npm run %type%
)

IF "%type%" EQU "" (
    set command=nodemon
)

start cmd /k "cd auth && %command% && exit"
start cmd /k "cd common && %command% && exit"
start cmd /k "cd main && %command% && exit"
start cmd /k "cd message && %command% && exit"