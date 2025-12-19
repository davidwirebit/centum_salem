export default function AvisoPrivacidad() {
  const columnaIzquierda = [
    "Conocer y verificar su identidad",
    "Validar los datos contenidos en sus documentos",
    "Consultar su información e historial crediticio",
    "Evaluar su situación patrimonial",
    "Medir su capacidad de pago",
    "Verificar que su información sea real, correcta y verídica",
    "Integrar, administrar y almacenar su expediente de cliente",
    "Operar los productos y servicios que contrate con Endless Money",
  ];

  const columnaDerecha = [
    "Compartir su información con las autoridades que lo soliciten",
    "Realizar encuestas sobre la calidad del servicio",
    "Atender sus dudas, quejas, aclaraciones y sugerencias",
    "Fines contables, estadísticos, administrativos o de auditoría",
    "Hacer consultas, investigaciones y/o revisiones de las actividades, operaciones, quejas y/o reclamaciones relacionadas con los productos o servicios ofrecidos o contratados con Endless Money",
  ];

  return (
    <div className="container shadow-xl   m-10 mx-auto px-6 py-12 flex flex-col gap-4">
      <h1
        className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px]
  "
      >
        Aviso de Privacidad
      </h1>
      <div
        className="text-[#212A59]  [leading-trim:both] [text-edge:cap] font-inter text-[16px]  font-light leading-normal tracking-[0px]
  "
      >
        <p className="text-[#212A59]">
          Endless Money, S.A.P.I. de C.V., SOFOM, E.N.R. se obliga al correcto
          tratamiento de sus datos personales conforme a lo establecido en el
          artículo 7 (siete) de la Ley Federal de Protección de Datos Personales
          en Posesión de los Particulares (la &quot;Ley&quot;), por lo que ponemos a su
          disposición el siguiente Aviso de Privacidad:
        </p>
      </div>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (1) Identidad y domicilio del responsable.
      </h2>
      <p className="text-[#212A59]">
        Endless Money, Sociedad Anónima Promotora de Inversión de Capital
        Variable, Sociedad Financiera de Objeto Múltiple, Entidad No Regulada
        (&quot;Endless Money&quot;), con domicilio en Ave. Lázaro Cárdenas 303 Torre Malva
        Int. 1501, San Pedro Garza García C.P. 66260, Nuevo León, México, es el
        responsable del uso y protección de sus datos personales, y al respecto
        le informamos lo siguiente:
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (2) Finalidades del tratamiento de sus datos personales.
      </h2>
      <p className="text-[#212A59]">
        Los datos personales, patrimoniales y/o financieros que recabaremos de
        usted a través de medios físicos, electrónicos, telefónicos, vía
        internet mediante chat, mensajes de texto, mensajería vía WhatsApp,
        correo electrónico y cualquier otra aplicación informática, son
        necesarios para ofrecerle los productos o servicios que solicita a
        Endless Money y/o cualquiera de las empresas con las que Endless Money
        tiene una relación contractual, los cuales se utilizarán para los
        siguientes fines:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          {columnaIzquierda.map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="font-bold text-lg">•</span>
              <span className="text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {columnaDerecha.map((item, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="font-bold text-lg">•</span>
              <span className="text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (3) Finalidades secundarias del tratamiento de sus datos personales.
      </h2>
      <p className="text-[#212A59]">
        De manera adicional, utilizaremos su información personal para las
        siguientes finalidades secundarias, que no son necesarias para el
        servicio y/o producto solicitado, pero que nos permiten brindarle una
        mejor atención:
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Ofrecerle o enviarle
        promociones y publicidad de Endless Money y/o de las empresas con las
        que Endless Money tenga una relación jurídica necesaria para ofrecer y
        proporcionar los servicios operados por Endless Money, vía correo
        electrónico, mensaje de texto, WhatsApp o cualquier otro medio
        electrónico;
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Conocer sus necesidades y
        preferencias para estar en posibilidad de ofrecerle productos que se
        adecuen a estas;
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Fines mercadotécnicos,
        publicitarios o de prospección comercial.
        <br />
        <br />
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (4) Mecanismo para que el titular pueda manifestar su negativa para
        finalidades secundarias o accesorias.
      </h2>
      <p className="text-[#212A59]">
        En caso de que no desee que sus datos personales sean tratados para las
        finalidades secundarias, desde este momento y dentro de los 5 (cinco)
        días hábiles siguientes a que nos comparta cualquier tipo de dato
        personal, usted nos puede comunicar su negativa por los siguientes
        medios: (i) envío de un correo electrónico a la dirección{" "}
        <a href="mailto:contacto@centum.mx" className="underline">
          contacto@centum.mx
        </a>
        ; o (ii) por llamada al número telefónico +52 81 3103 2261. La negativa
        para el uso de sus datos personales para las finalidades secundarias no
        podrá ser un motivo para que le neguemos los servicios y productos que
        solicita o contrata con nosotros.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (5) Datos personales tratados.
      </h2>
      <p className="text-[#212A59]">
        Para llevar a cabo las finalidades descritas en el presente Aviso de
        Privacidad, recabaremos y utilizaremos los siguientes datos personales:
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Datos de identificación del
        cliente y/o su cónyuge: Información concerniente a una persona que
        permite diferenciarla de otras en una colectividad, tales como nombre,
        estado civil, firma autógrafa y electrónica, Registro Federal de
        Contribuyentes (RFC), Clave Única de Registro de Población (CURP),
        Número de Seguridad Social (NSS), lugar y fecha de nacimiento,
        nacionalidad, fotografía y edad, entre otros.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Datos de contacto del
        cliente, y/o su cónyuge, y/o beneficiarios y/o referencias personales:
        Información que permite mantener o entrar en contacto con su titular,
        tal como domicilio, correo electrónico, teléfono fijo, teléfono celular,
        página web, entre otros.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Datos laborales, de
        ocupación y/o actividad económica: Información concerniente a una
        persona relativa a su empleo, cargo o comisión, desempeño laboral y
        experiencia profesional, generada a partir de procesos de reclutamiento,
        selección, contratación, nombramiento, evaluación y capacitación, tales
        como puesto, domicilio de trabajo, correo electrónico institucional,
        teléfono institucional, referencias laborales, fecha de ingreso y salida
        del empleo, ocupación, giro, profesión, nivel de ingresos, entre otros.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Datos patrimoniales y/o
        financieros: Información concerniente a una persona relativa a sus
        bienes, derechos, cargas u obligaciones susceptibles de valoración
        económica, como pueden ser bienes muebles e inmuebles, información
        fiscal, historial crediticio, ingresos y egresos, cuentas bancarias,
        seguros, afores, fianzas, número de tarjeta de crédito, número de
        seguridad, entre otro.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Datos personales contenidos
        en su Credencial para Votar, CURP, constancia de situación fiscal,
        comprobante de domicilio, estado de cuenta bancario, recibos de pago,
        entre otros.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Datos de geolocalización
        para la verificación de su identidad.
        <br />
        <br />
      </p>

      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (6) Datos personales sensibles.
      </h2>
      <p className="text-[#212A59]">
        Además de los datos personales antes mencionados, utilizaremos los
        siguientes datos personales considerados como sensibles y, que requieren
        de especial protección:
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Datos biométricos para la
        verificación de su identidad;
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Condiciones sociales o
        económicas.
        <br />
        <br />
        El tratamiento de su información personal, patrimonial o financiera y
        sensible, se realizará con base en los principios de legalidad, calidad,
        consentimiento, información, finalidad, lealtad, proporcionalidad y
        responsabilidad consagrados en el Artículo 6 (seis) de la Ley.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (7) Transferencia de datos personales.
      </h2>
      <p className="text-[#212A59]">
        Le informamos que sus datos personales, patrimoniales, financieros y/o
        sensibles, son compartidos dentro y fuera del país con nuestras
        filiales, subsidiarias, proveedores, consultores y auditores, así como
        con las autoridades mexicanas que así lo requieran.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (8) Consentimiento para la transferencia de los datos personales.
      </h2>
      <p className="text-[#212A59]">
        Le informamos que, para la transferencia de sus datos personales en
        términos del párrafo anterior, no requerimos su consentimiento en
        términos del Artículo 37 (treinta y siete) de la Ley. Endless Money
        podrá transferir sus datos personales a terceros sin necesidad de su
        consentimiento cuando: Esté previsto en una Ley o Tratado del cual
        México sea parte;
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Sea necesario por virtud de
        un contrato celebrado o por celebrar en interés del titular, por el
        responsable y un tercero;
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Sea legalmente exigida para
        la salvaguardar el interés público, o para la procuración o
        administración de justicia;
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Sea precisa para el
        reconocimiento, ejercicio o defensa de un derecho en un proceso
        judicial;
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Sea necesaria para el
        mantenimiento o cumplimiento de una relación entre Endless Money y el
        cliente.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (9) Medios y el procedimiento para ejercer los Derechos ARCO.
      </h2>
      <p className="text-[#212A59]">
        En términos del Artículo 28 (veintiocho) de la Ley, usted tiene derecho
        a: Conocer qué datos personales tenemos de usted, para qué los
        utilizamos y las condiciones del uso que les damos (Acceso); solicitar
        la corrección de su información personal en caso de que esté
        desactualizada, sea inexacta o incompleta (Rectificación); solicitar la
        eliminación de nuestros registros o bases de datos su información cuando
        considere que la misma no está siendo utilizada conforme a los
        principios, deberes y obligaciones previstas en la Ley (Cancelación);
        así como oponerse al uso de sus datos personales para fines específicos
        (Oposición); estos derechos se conocen como &quot;Derechos ARCO&quot;. Para el
        ejercicio de cualquiera de los Derechos ARCO, usted deberá presentar la
        solicitud respectiva por escrito vía correo electrónico, conforme al
        procedimiento y requisitos establecidos en el numeral 11 (once) del
        presente.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (10) Mecanismos y procedimientos revocar su consentimiento al
        tratamiento de sus datos personales.
      </h2>
      <p className="text-[#212A59]">
        Usted puede revocar el consentimiento que, en su caso, nos haya otorgado
        para el tratamiento de sus datos personales. Sin embargo, es importante
        que tenga en cuenta que no en todos los casos podremos atender su
        solicitud o concluir el uso de forma inmediata, ya que es posible que
        por alguna obligación legal requiramos seguir tratando sus datos
        personales. Asimismo, usted deberá considerar que, para ciertos fines,
        la revocación de su consentimiento implicará que no le podamos seguir
        prestando el producto o servicio que nos solicitó, o la conclusión de su
        relación con nosotros. Para revocar su consentimiento deberá presentar
        su solicitud por escrito vía correo electrónico, conforme al
        procedimiento y requisitos establecidos en el numeral 11 (once)
        siguiente.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (11) Procedimiento para ejercer los Derechos ARCO o para revocar el
        consentimiento para el tratamiento de los datos personales.
      </h2>
      <p className="text-[#212A59]">
        Para ejercer cualquier de sus Derechos ARCO en términos del numeral 9
        (nueve) de este Aviso, o revocar el su consentimiento para el
        tratamiento de sus datos personales conforme al numeral 10 (diez) del
        presente, deberá realizar el siguiente procedimiento:
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Deberá enviar un correo
        electrónico a{" "}
        <a href="mailto:contacto@centum.mx" className="underline">
          contacto@centum.mx
        </a>{" "}
        con lo siguiente:
      </p>
      <div className="ml-6 text-[#212A59]">
        <span className="font-bold text-lg">•</span> Indicar en el asunto
        &quot;Ejercicio de Derechos ARCO&quot; o &quot;Revocación de consentimiento&quot;
        <br />
        <span className="font-bold text-lg">•</span> Incluir sus datos de
        identificación tal como nombre, domicilio, teléfono, correo
        electrónico y una identificación oficial vigente.
        <br />
        <span className="font-bold text-lg">•</span> Señalar en el cuerpo del
        correo el Derecho ARCO que ejercerá o en su caso que revoca su
        consentimiento para el tratamiento de sus datos personales, la
        descripción clara y precisa de los datos personales respecto de los
        que se busca ejercer sus derechos, y la fecha y motivo bajo el cual
        nos proporcionó dichos datos personales.
      </div>
      <p className="text-[#212A59]">
        <span className="font-bold text-lg">•</span> Una vez que recibamos su
        solicitud, nuestro Departamento de Privacidad le emitirá un acuse de
        recibo y trámite en el que se indicará la fecha de recepción.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Nuestro Departamento de
        Privacidad determinará si es procedente su solicitud dentro de los 20
        (veinte) días naturales siguientes a que recibamos la misma, lo cual le
        será comunicado por correo electrónico.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> En caso de que su solicitud
        sea procedente, nuestro Departamento de Privacidad la hará efectiva
        dentro de los 15 (quince) días naturales siguientes a que se emita la
        respuesta correspondiente.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Sea necesario por virtud de
        un contrato celebrado o por celebrar en interés del titular, por el
        responsable y un tercero;
        <br />
        Los datos de contacto de la persona o departamento que dará trámite a
        las solicitudes para el ejercicio de sus derechos, así como atender
        cualquier duda que pudiera tener respecto al tratamiento de sus datos
        personales, son los siguientes:
      </p>
      <div className="ml-6 text-[#212A59]">
        Departamento de Privacidad de Endless Money
        <br />
        Domicilio: Ave. Lázaro Cárdenas 303 Torre Malva Int. 1501, San Pedro
        Garza García C.P. 66260, Nuevo León, México
        <br />
        Correo electrónico:{" "}
        <a href="mailto:contacto@centum.mx" className="underline">
          contacto@centum.mx
        </a>
        <br />
        Teléfono: +52 81 3103 2261
      </div>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (12) Opciones y medios para limitar el uso o divulgación de sus datos
        personales.
      </h2>
      <p className="text-[#212A59]">
        Con objeto de que usted pueda limitar el uso y divulgación de su
        información personal, le ofrecemos los siguientes medios:
        <br />
        <span className="font-bold text-lg">•</span> Su inscripción en el
        Registro Público para Evitar Publicidad (&quot;REPEP&quot;) que está a cargo de la
        Procuraduría Federal del Consumidor (&quot;PROFECO&quot;), a través de la
        siguiente página{" "}
        <a
          href="https://repep.profeco.gob.mx"
          target="_blank"
          className="underline"
        >
          https://repep.profeco.gob.mx
        </a>
        , con la finalidad de que sus datos personales no sean utilizados para
        recibir publicidad o promociones de empresas de bienes o servicios.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Su inscripción en el
        Registro Público de Usuarios (&quot;REUS&quot;) a cargo de la Comisión Nacional
        para la Protección y Defensa de los Usuarios de Servicios Financieros
        (&quot;CONDUSEF&quot;), a través de la siguiente página{" "}
        <a
          href="https://webapps.condusef.gob.mx/reus/app/registro.jsp"
          target="_blank"
          className="underline"
        >
          https://webapps.condusef.gob.mx/reus/app/registro.jsp
        </a>
        , con la finalidad de que sus datos personales no sean utilizados para
        recibir publicidad o promociones por parte de instituciones financieras.
        <br />
        <br />
        <span className="font-bold text-lg">•</span> Su registro en el listado
        de exclusión &quot;Lista de rechazo de publicidad de Endless Money&quot;, a fin de
        que sus datos personales no sean tratados para fines mercadotécnicos,
        publicitarios o de prospección comercial por nuestra parte; para lo cual
        deberá ponerse en contacto con nuestro Departamento de Privacidad
        mediante correo electrónico a{" "}
        <a href="mailto:contacto@centum.mx" className="underline">
          contacto@centum.mx
        </a>{" "}
        o vía telefónica al número +52 81 3103 2261.
        <br />
        <br />
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (13) Uso de cookies, web beacons o cualquier otra tecnología similar.
      </h2>
      <p className="text-[#212A59]">
        Le informamos que en nuestra página de Internet utilizamos cookies, web
        beacons y otras tecnologías a través de las cuales es posible monitorear
        su comportamiento como usuario de Internet, así como brindarle un mejor
        servicio y experiencia de usuario al navegar en nuestra página.
        <br /> Los datos personales que obtenemos de estas tecnologías de
        rastreo son los siguientes: horario de navegación, tiempo de navegación
        en nuestra página de Internet, secciones consultadas, y páginas de
        Internet accedidas previo a la nuestra. Los datos personales obtenidos
        se utilizarán para los fines anteriormente establecidos y serán
        compartidos con nuestras subsidiarias, filiales, proveedores,
        consultores y auditores en territorio nacional.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (14) Modificaciones al Aviso de Privacidad.
      </h2>
      <p className="text-[#212A59]">
        El presente Aviso de Privacidad puede sufrir modificaciones, cambios o
        actualizaciones derivadas de nuevos requerimientos legales; de nuestras
        propias necesidades por los productos o servicios que ofrecemos; de
        nuestras prácticas de privacidad; de cambios en nuestro modelo de
        negocio, o por otras causas. Nos comprometemos a mantenerlo informado
        sobre los cambios que pueda sufrir el presente Aviso de Privacidad, las
        notificaciones sobre cambios o actualizaciones al presente Aviso de
        Privacidad se realizarán a través de nuestra página de internet
        centum.com.mx.
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (15) Información del INAI.
      </h2>
      <p className="text-[#212A59]">
        Si usted considera que su derecho a la protección de sus datos
        personales ha sido lesionado por alguna conducta u omisión de nuestra
        parte, o presume alguna violación a las disposiciones previstas en la
        Ley, su Reglamento y demás ordenamientos aplicables, podrá interponer su
        inconformidad o denuncia ante el Instituto Nacional de Transparencia,
        Acceso a la Información y Protección de Datos Personales (&quot;INAI&quot;). Para
        mayor información, le sugerimos visitar su página oficial de Internet{" "}
        <a href="https://www.inai.org.mx" target="_blank" className="underline">
          https://www.inai.org.mx
        </a>
        .
      </p>
      <h2 className="text-[#212A59] leading-[48px] [leading-trim:both] [text-edge:cap] font-poppins text-[28px] font-bold tracking-[0px] mt-6">
        (16) Reconocimiento.
      </h2>
      <p className="text-[#212A59]">
        Reconozco que Endless Money puso a mi disposición el presente Aviso de
        Privacidad, asimismo lo he leído y comprendo que el tratamiento de mis
        datos personales, patrimoniales, financieros y sensibles, son necesarios
        para celebrar y mantener una relación jurídica con Endless Money.
        <br />
        Otorgo mi consentimiento para que mis datos personales sean tratados
        conforme a lo señalado en el presente Aviso de Privacidad, durante mi
        relación jurídica con Endless Money y una vez concluido el plazo del
        contrato celebrado. Declaro que informé en tiempo y forma a mis
        familiares y terceros que he proporcionado sus datos personales a
        Endless Money y obtuve autorización previa por parte de ellos para
        hacerlo, así como el tratamiento y uso que se les dará.
      </p>
      <p className="text-end">Última actualización: 1 de enero de 2025.</p>
    </div>
  );
}
