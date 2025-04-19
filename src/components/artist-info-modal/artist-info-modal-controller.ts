import { marked } from "marked";

export function showArtistInfoModal({
  name,
  imageUrl,
  markdownDescription,
}: {
  name: string;
  imageUrl?: string;
  markdownDescription?: string;
}) {
  const dialogElement = document.getElementById("dialog");
  const imageElement = document.getElementById("dialog-image");
  if (imageElement instanceof HTMLImageElement) {
    imageElement.src = imageUrl ?? "";
  }

  const nameElement = document.getElementById("dialog-name");
  if (nameElement instanceof HTMLElement) {
    nameElement.innerText = name;
  }

  const descriptionElement = document.getElementById("dialog-description");
  if (descriptionElement instanceof HTMLDivElement) {
    if (markdownDescription && typeof markdownDescription === "string") {
      descriptionElement.innerHTML = marked.parse(markdownDescription, {
        async: false,
      });
    }
  }

  if (dialogElement && dialogElement instanceof HTMLDialogElement) {
    dialogElement.showModal();
    dialogElement.scrollTo(0, 0);
    dialogElement.addEventListener("click", function (event) {
      if (event.target === dialogElement) {
        dialogElement.close();
      }
    });
  }
}
