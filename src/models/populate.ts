import { db } from './db'

export async function populate() {
  console.log('Debut de la fonction populate')

  const nbLists = await db.lists.count()
  let listId: number | undefined

  if (nbLists && nbLists > 0) {
    listId = (await db.lists.toArray())[0]?.id
  } else {
    // on doit créer une liste
    listId = await db.lists.add({
      title: 'Default',
    })
  }

  if (listId === undefined) {
    throw new Error("La liste n'a pas pu être créée ou récupérée.")
  }

  // Ajout manuel de données
  await db.cards.bulkAdd([
    {
      question: 'What is the capital of France?',
      answer: 'Paris',
      listId,
    },
    {
      question: 'What is the capital of Germany?',
      answer: 'Berlin',
      listId,
    },
    {
      question: 'What is the capital of Spain?',
      answer: 'Madrid',
      listId,
    },
  ])

  console.log('Data populated')
}

/*
  let cards: Card[];

  try {
    const response = await fetch('http://localhost:5173/src/models/data.json');
    cards = await response.json();
  } catch (error) {
    console.error('Erreur de Fetch:', error);
    cards = [];
  }

  console.log('Cards JSON:', cards);

  const data = cards.map((e: any) => ({
    question: e.question,
    answer: e.answer,
    listId,
  }));

  await db.cards.bulkAdd(data);
  */

// Fonction pour fetch un JSON
/*
async function fetchJson(url: string) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Data JSON:', data)
    return data
  } catch (error) {
    console.error('Erreur lors du fetch:', error)
    throw error
  }
}
*/
