import { PayloadDto } from '../DTO/Payload.dto';

export class PayloadStructure {
  private payload: PayloadDto;
  constructor(payload) {
    this.payload = payload;
  }

  get makePayloadObject(): PayloadDto {
    return {
      nickName: this.payload.nickName,
      userId: this.payload.userId,
      role: this.payload.role,
    };
  }
}
