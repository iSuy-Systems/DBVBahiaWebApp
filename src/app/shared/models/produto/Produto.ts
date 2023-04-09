import { Picture } from "../common/Picture.model";

export class Produto {
  fornecedorId: string;
  nome: string;
  descricao: string;
  picture : Picture;
  valor: number;
  ativo: boolean;
  nomeFornecedor: string;
}