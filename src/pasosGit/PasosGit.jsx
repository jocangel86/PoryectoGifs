
export function PasosGit() {
  return (
    <>
    <h1>PasosGit</h1>
    <ol>PasosGit
        <li>Se hace un git init para inciarlizar respaldo.</li>
        <li>Se hace un git add . para preparar todos los cambios.</li>
        <li>Se hace un git add commit -m "Descripción" para crear la foto.</li>
        <li>git remote add origin https://github.com/jocangel86/PoryectoGifs.git para agregar el repositorio al que se va a subir (sólo  se hace la primera vez)</li>
        <li> git branch -M main para cambiar el nombre de la rama (sólo  se hace la primera vez)</li>
        <li>git push -u origin main para subir los cambios</li>
        <li><strong>NOTA:</strong> git chekout -- para recuperar la última foto en caso de desastre.</li>
    </ol>
    </>
  )
}
