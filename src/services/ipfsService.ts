import { NFTStorage, File } from 'nft.storage';

const client = new NFTStorage({ token: import.meta.env.VITE_NFT_STORAGE_TOKEN });
export async function uploadToIPFS(file: File): Promise<string> {
  const cid = await client.storeBlob(file);
  return `https://ipfs.io/ipfs/${cid}`;
}

export async function uploadJSONToIPFS(data: any): Promise<string> {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const file = new File([blob], 'metadata.json');
  const cid = await client.storeBlob(file);
  return `https://ipfs.io/ipfs/${cid}`;
}