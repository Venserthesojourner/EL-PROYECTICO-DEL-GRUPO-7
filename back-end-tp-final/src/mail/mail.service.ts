import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Profile } from 'src/modules/profile/profile.entity';
import { Usuario } from './../modules/usuario/entities/usuario.entity';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    async sendUserConfirmation(user: Usuario, profile: Profile, token: string) {
        const url = `example.com/auth/confirm?token=${token}`;

        await this.mailerService.sendMail({
            to: user.email,
            // from: '"Support Team" <support@example.com>', // override default from
            subject: 'Welcome to Nice App! Confirm your Email',
            template: './confirmation', // `.hbs` extension is appended automatically
            context: { // ✏️ filling curly brackets with content
                name: profile.username,
                url,
            },
        });
    }
}
