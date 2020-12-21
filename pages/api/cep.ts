import type { NextApiRequest, NextApiResponse } from 'next'

type Address = {
  cep: string
  uf: string
  cidade: string
  bairro: string
  logradouro: string
  aux: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query

  const response = await fetch(`http://cep.la/${encodeURI(query)}`, {
    headers: {
      Accept: 'application/json',
    },
  })

  const data: Address[] = await response.json()

  return res.json(data[Math.floor(Math.random() * data.length)])
}

export default handler
