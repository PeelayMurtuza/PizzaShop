import {inject} from '@loopback/core';
import {TokenService} from '@loopback/authentication';
import {HttpErrors} from '@loopback/rest';
import * as jwt from 'jsonwebtoken';

export class JWTService implements TokenService {
  async generateToken(userProfile: any): Promise<string> {
    if (!userProfile) {
      throw new HttpErrors.Unauthorized('Error generating token');
    }
    return jwt.sign(userProfile, 'your-secret-key', {expiresIn: '7h'});
  }

  async verifyToken(token: string): Promise<any> {
    try {
      return jwt.verify(token, 'your-secret-key');
    } catch (err) {
      throw new HttpErrors.Unauthorized('Invalid Token');
    }
  }
}
