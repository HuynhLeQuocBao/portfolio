import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

type Data = {
  message: string;
};

const savePortfolioToFile = (data: any) => {
  const filePath = path.join(process.cwd(), 'public', 'portfolio.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};


export async function POST(req: NextRequest){
  try {
    // Save the incoming data to a JSON file
    const data = await req.json()
    console.log(data)
    savePortfolioToFile(data);
    return NextResponse.json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    return  NextResponse.json({ message: 'Failed to save data' });
  }
}