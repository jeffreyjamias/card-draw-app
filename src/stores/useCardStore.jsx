import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createCards } from "../utils/createCards";
import { shuffle } from "../utils/shuffle";


export const useCardStore = create(
  persist(
    (set, get) => ({

      cards: shuffle(createCards(200)),

      history: [],


      pickRandomCard: (cardValue) => {

        const cards = get().cards;

        const card = cards.find(
          c => c.value === cardValue
        );

        if (!card || card.flipped) return;


        set({
          cards: cards.map(c =>
            c.value === cardValue
              ? {
                ...c,
                flipped: true
              }
              : c
          )
        });


        setTimeout(() => {

          const pickedCard = {
            ...card,
            pickedAt: new Date().toISOString()
          };


          set({

            cards:
              get().cards.filter(
                c => c.value !== cardValue
              ),


            history: [
              pickedCard,
              ...get().history
            ]

          });


        }, 2500);

      },


      reset: () => {

        set({
          cards: shuffle(createCards(200)),
          history: []
        })

      }

    }),
    {
      name: "cards-storage"
    }
  )
);