INSTALL_DIR = ~/.grunt-init/flatboot

# copying template into ~/.grunt-init
install:
	@- rm -r ${INSTALL_DIR}
	@- mkdir ${INSTALL_DIR}
	@ rsync --exclude=".git" -qr * ${INSTALL_DIR}
	@echo "Bootflat installed!"

.PHONY: install
