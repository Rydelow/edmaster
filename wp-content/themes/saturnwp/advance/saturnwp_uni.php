<?php
class SaturnWp_Skt13Framework_Uni{
	function __construct(){
		add_filter( 'saturnwp_docs_address', array( $this, 'docs_link' ), 10, 2 );
	}

	function docs_link() {
		return 'https://www.sktthemesdemo.net/documentation/saturnwp-doc';
	}
}

new SaturnWp_Skt13Framework_Uni();






