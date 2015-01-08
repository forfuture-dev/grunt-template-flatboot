INSTALL_DIR = ~/.grunt-init/esta

# copying template into ~/.grunt-init
install:
	@- rm -rf ${INSTALL_DIR}
	@- mkdir ${INSTALL_DIR}
	@ rsync --exclude=".git" -qr * ${INSTALL_DIR}
	@ echo "Esta installed!"

.PHONY: install

test:
	@ grunt
