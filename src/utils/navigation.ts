import type { Parc } from "../types/Parc";


/**
 * Ouvre une navigation externe vers un parc
 */

export function ouvrirNavigation(parc: Parc): void {

  const destination =
    `${parc.latitude},${parc.longitude}`;


  const url =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=driving`;


  window.open(
    url,
    "_blank"
  );

}