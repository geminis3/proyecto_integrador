<table width="556" cellspacing="0" cellpadding="0" border="0" bgcolor="#fafafa" align="center">
    <tbody>
        <tr>
            <blockquote>
                <h3 style="font-family:'Arial',Helvetica,sans-serif;color:#5f6062;"><strong> {{ $appName }}</strong></h3>
            </blockquote>
        </tr>
        <tr>
            <td>&nbsp;
            </td>
        </tr>
        <tr>
            <td style="font-family:'Arial',Helvetica,sans-serif;font-size:12px;color:#5f6062;">
                <blockquote><span style="font-family:'arial',Helvetica,sans-serif;font-size:13px;color:#5f6062;">
                <strong>Saludos, {{ $name }}</strong></span>
                <br><br><br>
                Recibe un cordial saludo de {{ $appName }}.<br><br>
                Hemos recibido una solicitud de reinicio de contraseña. Para confirmar haga click en el siguiente enlace.<br><br>
                <a href="{{ $body }}">Confirmar Reseteo de Contraseña</a>
                <br><br><br>
                Atentamente,<br>
                <strong> {{ $appName }}</strong>
                </blockquote>
            </td>
        </tr>
        <tr>
            <td>&nbsp;
            </td>
        </tr>
    </tbody>
</table>
