/* ------------------------------------------------------------------
   ASSETS REAIS — baixados da pasta oficial do Google Drive da marca
   e embutidos como data URI (src/assets/inline) para que o material
   original da marca nunca se perca entre builds.
   https://drive.google.com/drive/folders/1TbX7gCKu-PnI8riPDAJZ27Kz5C0iyne5
   Nenhuma imagem de banco, genérica ou gerada por IA é usada no site.
------------------------------------------------------------------- */
import logoOficial from "../assets/inline/logo";
import heroCaixa from "../assets/inline/hero-caixa";
import donutChocolateDoceDeLeite from "../assets/inline/donut-chocolate-doce-de-leite";
import donutsRecheados from "../assets/inline/donuts-recheados";
import donutsChocolateWafer from "../assets/inline/donuts-chocolate-wafer";
import donutsBandeja from "../assets/inline/donuts-bandeja";
import processoPost from "../assets/inline/processo-post";
import lifestyleMilkshake from "../assets/inline/lifestyle-milkshake";
import closeCaixa from "../assets/inline/close-caixa";
import closeDonutVertical from "../assets/inline/close-donut-vertical";
import brownieConfetes from "../assets/inline/brownie-confetes";

import vVitrineCaixa from "../assets/inline/vitrine-caixa";
import vRecheio from "../assets/inline/recheio";
import vPreparando from "../assets/inline/preparando";
import vLoja from "../assets/inline/loja";
import vCloseZoom from "../assets/inline/close-zoom";
import vEquipe from "../assets/inline/equipe";

import pVitrineCaixa from "../assets/inline/poster-vitrine-caixa";
import pRecheio from "../assets/inline/poster-recheio";
import pPreparando from "../assets/inline/poster-preparando";
import pLoja from "../assets/inline/poster-loja";
import pCloseZoom from "../assets/inline/poster-close-zoom";
import pEquipe from "../assets/inline/poster-equipe";

export const LOGO = logoOficial;

export const IMAGES = {
  heroCaixa,
  donutChocolateDoceDeLeite,
  donutsRecheados,
  donutsChocolateWafer,
  donutsBandeja,
  processoPost,
  lifestyleMilkshake,
  closeCaixa,
  closeDonutVertical,
  brownieConfetes,
};

/* ------------------------------------------------------------------
   Links oficiais (fornecidos pela marca)
------------------------------------------------------------------- */
export const LINKS = {
  instagram: "https://www.instagram.com/misterdonutsbrasil/?hl=pt",
  instagramHandle: "@misterdonutsbrasil",
  whatsapp: "https://wa.me/5511950857798",
  whatsappLabel: "(11) 95085-7798",
  ifoodVilaLeopoldina:
    "https://www.ifood.com.br/delivery/sao-paulo-sp/mister-donuts---vila-leopoldina-vila-leopoldina/8f3badb1-dd4a-45f1-a9cd-d56a2833aff4?UTM_Medium=share&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  ifoodGuarulhos:
    "https://www.ifood.com.br/delivery/guarulhos-sp/mister-donuts---guarulhos-gopouva/63f296a2-8cfb-40c1-a511-2aacbd3e49a6?UTM_Medium=share&utm_source=ig&utm_medium=social&utm_content=link_in_bio",
} as const;

const maps = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export type Order = { label: string; href: string; kind: "ifood" | "whatsapp" };

export type Location = {
  id: string;
  name: string;
  city: string;
  address: string;
  mapsUrl: string;
  order: Order;
};

export const LOCATIONS: Location[] = [
  {
    id: "vila-leopoldina",
    name: "Vila Leopoldina",
    city: "São Paulo · SP",
    address: "Rua Carlos Weber, 1660",
    mapsUrl: maps("Mister Donuts Rua Carlos Weber, 1660 - Vila Leopoldina, São Paulo"),
    order: { label: "Pedir no iFood", href: LINKS.ifoodVilaLeopoldina, kind: "ifood" },
  },
  {
    id: "santana",
    name: "Santana",
    city: "São Paulo · SP",
    address: "R. Augusto Tolle, 679",
    mapsUrl: maps("Mister Donuts R. Augusto Tolle, 679 - Santana, São Paulo"),
    order: { label: "Pedir pelo WhatsApp", href: LINKS.whatsapp, kind: "whatsapp" },
  },
  {
    id: "guarulhos",
    name: "Guarulhos",
    city: "Guarulhos · SP",
    address: "R. Cônego Valadão, 1452",
    mapsUrl: maps("Mister Donuts R. Cônego Valadão, 1452 - Gopoúva, Guarulhos"),
    order: { label: "Pedir no iFood", href: LINKS.ifoodGuarulhos, kind: "ifood" },
  },
];

/* ------------------------------------------------------------------
   Produtos — descritos apenas pelo que aparece nas fotos oficiais.
   Sem preços, sem nomes comerciais inventados.
------------------------------------------------------------------- */
export const FLAVORS = [
  {
    id: "chocolate-doce-de-leite",
    name: "Chocolate com doce de leite",
    note: "Cobertura de chocolate finalizada com fio de doce de leite.",
    image: donutChocolateDoceDeLeite,
    alt: "Donut com cobertura de chocolate e fio de doce de leite, servido em prato azul da Mister Donuts",
  },
  {
    id: "recheados",
    name: "Recheados com creme",
    note: "Donut fechado, recheio cremoso, coco ralado e calda por cima.",
    image: donutsRecheados,
    alt: "Dois donuts recheados segurados nas mãos, um com coco ralado e creme e outro com chantilly e calda",
  },
  {
    id: "chocolate-wafer",
    name: "Chocolate branco e preto",
    note: "Duas coberturas de chocolate e um wafer crocante por cima.",
    image: donutsChocolateWafer,
    alt: "Donuts com cobertura de chocolate branco e preto finalizados com barra de wafer, sobre bandeja",
  },
  {
    id: "confetes",
    name: "Confetes coloridos",
    note: "Confeitos crocantes e fio de chocolate branco sobre a cobertura.",
    image: donutsBandeja,
    alt: "Donuts com confetes coloridos e fio de chocolate branco sobre bandeja de confeitaria",
  },
] as const;

/* ------------------------------------------------------------------
   Vídeos oficiais (arquivos .mp4 da pasta do Drive, recomprimidos
   para web; sem áudio, usados como loops curtos)
------------------------------------------------------------------- */
export const VIDEOS = [
  {
    id: "vitrine-caixa",
    src: vVitrineCaixa,
    poster: pVitrineCaixa,
    title: "A caixa montada",
    note: "Quatro donuts na caixa, um a um, em close.",
    label: "Vídeo: quatro donuts na caixa oficial, apresentados em close um a um",
  },
  {
    id: "recheio",
    src: vRecheio,
    poster: pRecheio,
    title: "O recheio por dentro",
    note: "O donut dividido ao meio para mostrar o recheio.",
    label: "Vídeo: donut sendo dividido ao meio para mostrar a quantidade de recheio",
  },
  {
    id: "preparando",
    src: vPreparando,
    poster: pPreparando,
    title: "Preparando os donuts",
    note: "Parte do preparo, direto da cozinha.",
    label: "Vídeo: preparo dos donuts na cozinha da Mister Donuts",
  },
  {
    id: "loja",
    src: vLoja,
    poster: pLoja,
    title: "Na loja",
    note: "A produção acontecendo dentro da unidade.",
    label: "Vídeo: equipe preparando os donuts dentro da loja",
  },
  {
    id: "close-zoom",
    src: vCloseZoom,
    poster: pCloseZoom,
    title: "Prestígio cremoso",
    note: "Close no recheio e na cobertura de coco.",
    label: "Vídeo: close com zoom no donut Prestígio cremoso, com recheio e coco",
  },
  {
    id: "equipe",
    src: vEquipe,
    poster: pEquipe,
    title: "Quem faz acontecer",
    note: "A equipe que está todo dia na produção.",
    label: "Vídeo: funcionárias da Mister Donuts na loja",
  },
] as const;

export const NAV = [
  { href: "#sabores", label: "Sabores" },
  { href: "#processo", label: "Processo" },
  { href: "#videos", label: "Vídeos" },
  { href: "#unidades", label: "Unidades" },
  { href: "#contato", label: "Contato" },
] as const;
