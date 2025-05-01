all: run1


install:
	pnpm i

update:
	pnpm up

packs:
	pnpm run packs

build1:
	pnpm run build1

build2:
	pnpm run build2

build3:
	pnpm run build3

obfus:
	pnpm run obfus

build_bin:
	pnpm run build_bin

run1:
	pnpm run main1

run2:
	pnpm run main2

clean:
	pnpm run clean

fmt:
	pnpm run fmt:fix

lint:
	pnpm run lint

test:
	pnpm run test

bench:

coverage:
